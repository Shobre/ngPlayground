import { Component, OnInit } from "@angular/core";
import { Sort } from "@angular/material";
import { Apollo, QueryRef } from "apollo-angular";
import gql from "graphql-tag";

export interface Rankings {
  rank: number;
  date: number;
  points: number;
  player: {
    fName: string;
    lName: string;
  };
}

const RANKINGS_QUERY = gql`
  query rankings($rank: Int!) {
    rankings(rank: $rank) {
      date
      rank
      points
      player {
        first_name
        last_name
      }
    }
  }
`;

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.scss"]
})
export class RankingComponent implements OnInit {
  rank: number = 1;
  rankings: Rankings[];
  sortedData: Rankings[];
  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: RANKINGS_QUERY,
      variables: { rank: Math.round(this.rank) }
    });

    this.query.valueChanges.subscribe(result => {
      this.rankings = result.data && result.data.rankings;
      this.sortedData = this.rankings.slice();
    });
  }

  update() {
    return this.query.refetch({ rank: Math.round(this.rank) });
  }

  sortData(sort: Sort) {
    const data = this.rankings.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "rank":
          return compare(a.rank, b.rank, isAsc);
        case "date":
          return compare(a.date, b.date, isAsc);
        case "points":
          return compare(a.points, b.points, isAsc);
        case "fName":
          return compare(a.player.fName, b.player.fName, isAsc);
        case "lName":
          return compare(a.player.lName, b.player.lName, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

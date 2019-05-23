import { Component, OnInit } from "@angular/core";
import { Sort } from "@angular/material";
import { Apollo, QueryRef } from "apollo-angular";
import gql from "graphql-tag";

export interface Player {
  fName: string;
  lName: string;
  hand: string;
  birthday: string;
  country: string;
}

const PLAYERS_QUERY = gql`
  query players($offset: Int) {
    players(offset: $offset, limit: 10) {
      id
      first_name
      last_name
      hand
      birthday
      country
    }
  }
`;

@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.scss"]
})
export class PlayersComponent implements OnInit {
  page = 1;
  players: Player[] = [];
  sortedData: Player[] = [];

  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: PLAYERS_QUERY,
      variables: { offset: 10 * this.page }
    });

    this.query.valueChanges.subscribe(result => {
      this.players = result.data && result.data.players;
      this.sortedData = this.players.slice();
    });
  }

  update() {
    this.query.refetch({ offset: 10 * this.page });
  }

  nextPage() {
    this.page++;
    this.update();
  }

  prevPage() {
    if (this.page > 1) this.page--;
    this.update();
  }

  sortData(sort: Sort) {
    const data = this.players.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "fName":
          return compare(a.fName, b.fName, isAsc);
        case "lName":
          return compare(a.lName, b.lName, isAsc);
        case "hand":
          return compare(a.hand, b.hand, isAsc);
        case "birthday":
          return compare(a.birthday, b.birthday, isAsc);
        case "country":
          return compare(a.country, b.country, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

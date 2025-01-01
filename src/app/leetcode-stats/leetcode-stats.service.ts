import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LeetcodeStatsService {
  leetcodeProfileUrl: string = 'leetcode/graphql';

  private readonly http = inject(HttpClient);

  temp: any = {
    query:
      '\n    query userContestRankingInfo($username: String!) {\n  userContestRanking(username: $username) {\n    attendedContestsCount\n    rating\n    globalRanking\n    totalParticipants\n    topPercentage\n    badge {\n      name\n    }\n  }\n  userContestRankingHistory(username: $username) {\n    attended\n    trendDirection\n    problemsSolved\n    totalProblems\n    finishTimeInSeconds\n    rating\n    ranking\n    contest {\n      title\n      startTime\n    }\n  }\n}\n    ',
    variables: {
      username: 'micdrop23',
    },
    operationName: 'userContestRankingInfo',
  };

  getContestStats() {
    const operationName: string = 'userContestRankingInfo';
    const query: string = `
    query userContestRankingInfo($username: String!) {
  userContestRanking(username: $username) {
    attendedContestsCount
    rating
    globalRanking
    totalParticipants
    topPercentage
    badge {
      name
    }
  }
  userContestRankingHistory(username: $username) {
    attended
    trendDirection
    problemsSolved
    totalProblems
    finishTimeInSeconds
    rating
    ranking
    contest {
      title
      startTime
    }
  }
}
    `;
    const variables: any = {
      username: 'micdrop23',
    };

    const headers = {
      'Content-Type': 'application/json',
      'Referer': 'https://leetcode.com',
    };
    return this.http.post(this.leetcodeProfileUrl, this.temp, { headers });
  }
}

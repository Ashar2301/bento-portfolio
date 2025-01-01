import { Component, inject, OnInit } from '@angular/core';
import { LeetcodeStatsService } from './leetcode-stats.service';

@Component({
  selector: 'app-leetcode-stats',
  imports: [],
  templateUrl: './leetcode-stats.component.html',
  styleUrl: './leetcode-stats.component.scss',
})
export class LeetcodeStatsComponent implements OnInit {
  private readonly leetcodeStatsService: LeetcodeStatsService =
    inject(LeetcodeStatsService);

  ngOnInit(): void {
    this.lcData();
    this.temp();
  }

  getContestStats() {
    this.leetcodeStatsService.getContestStats().subscribe({
      next: (res: any) => {
        console.log(res);
      },
    });
  }

  temp() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  lcData(): void {
    const user: string = 'micdrop23';
    const query = `
  query getUserProfile($username: String!) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      contributions {
        points
      }
      profile {
        reputation
        ranking
      }
      submissionCalendar
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
    recentSubmissionList(username: $username) {
      title
      titleSlug
      timestamp
      statusDisplay
      lang
      __typename
    }
    matchedUserStats: matchedUser(username: $username) {
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
          __typename
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
          __typename
        }
        __typename
      }
    }
  }
`;
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Referer: 'https://leetcode.com',
      },
      body: JSON.stringify({ query: query, variables: { username: user } }),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.errors) {
          console.log(data);
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.error('Error', err);
      });
  }
}

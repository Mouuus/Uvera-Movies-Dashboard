import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjYzZTdiYzZhNzcwYzZhY2RjNTJmMmRiZDUyNTNlYSIsIm5iZiI6MTczNjAwMTcyMS42ODk5OTk4LCJzdWIiOiI2Nzc5NDhiOTZkN2NhMDBlNzg3MjgyMTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8hhwBuUnvd7Rqf8c58PujRzo91zsYJM7yBptwzZyezY',
  },
};
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  http = inject(HttpClient);
  apiURL = 'https://api.themoviedb.org/3';
  getMovies() {
    return this.http.get<any>(this.apiURL + '/discover/movie', options);
  }

  getTvShows() {
    return this.http.get(this.apiURL + '/discover/tv', options);
  }

  getBannerImage(id: number) {
    return this.http.get(this.apiURL + `/movie/${id}/images`, options);
  }

  getBannerVideo(id: number) {
    return this.http.get(this.apiURL + `/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get(this.apiURL + `/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get(this.apiURL + '/movie/now_playing', options);
  }

  getPopularMovies() {
    return this.http.get(this.apiURL + '/movie/popular', options);
  }

  getTopRated() {
    return this.http.get(this.apiURL + '/movie/top_rated', options);
  }

  getUpcomingMovies() {
    return this.http.get(this.apiURL + '/movie/upcoming', options);
  }
}

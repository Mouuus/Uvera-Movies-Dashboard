import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });

    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch movies', () => {
    const mockResponse = { results: [] };

    service.getMovies().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://api.themoviedb.org/3/discover/movie');
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.has('Authorization')).toBeTrue();
    req.flush(mockResponse);
  });

  it('should fetch TV shows', () => {
    const mockResponse = { results: [] };

    service.getTvShows().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://api.themoviedb.org/3/discover/tv');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch banner image', () => {
    const id = 123;
    const mockResponse = { backdrops: [] };

    service.getBannerImage(id).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`https://api.themoviedb.org/3/movie/${id}/images`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch banner video', () => {
    const id = 123;
    const mockResponse = { results: [] };

    service.getBannerVideo(id).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`https://api.themoviedb.org/3/movie/${id}/videos`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch banner detail', () => {
    const id = 123;
    const mockResponse = { id: 123, title: 'Test Movie' };

    service.getBannerDetail(id).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`https://api.themoviedb.org/3/movie/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch now-playing movies', () => {
    const mockResponse = { results: [] };

    service.getNowPlayingMovies().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://api.themoviedb.org/3/movie/now_playing');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch popular movies', () => {
    const mockResponse = { results: [] };

    service.getPopularMovies().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://api.themoviedb.org/3/movie/popular');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch top-rated movies', () => {
    const mockResponse = { results: [] };

    service.getTopRated().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://api.themoviedb.org/3/movie/top_rated');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch upcoming movies', () => {
    const mockResponse = { results: [] };

    service.getUpcomingMovies().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://api.themoviedb.org/3/movie/upcoming');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});

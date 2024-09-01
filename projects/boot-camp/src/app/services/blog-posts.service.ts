import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AddBlogPost, BlogPostModel } from '../models/add-blog-post.model'
import { environment } from '../../environments/environment'

@Injectable({
	providedIn: 'root',
})
export class BlogPostsService {
	constructor(private http: HttpClient) {}

	addBlogPost(blogPost: AddBlogPost) {
		return this.http.post(environment.apiUrl + '/BlogPosts', blogPost)
	}

	getBlogPosts() {
		return this.http.get<BlogPostModel[]>(environment.apiUrl + '/BlogPosts')
	}
}

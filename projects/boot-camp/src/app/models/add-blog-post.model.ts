export class AddBlogPost {
	title?: string
	shortDescription?: string
	content?: string
	featuredImageUrl?: string
	urlHandle?: string
	author?: string
	publishDate?: Date
	isVisible: boolean = false
	categories?: string[]
}

export class BlogPostModel {
	id?: string
	title?: string
	shortDescription?: string
	content?: string
	featuredImageUrl?: string
	urlHandle?: string
	author?: string
	publishDate?: Date
	isVisible: boolean = false
	categories?: string[]
}

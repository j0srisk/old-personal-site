export function filterProjects(projects, category) {
	projects = projects.filter((page) => page.frontmatter.category == category)
	projects = projects.filter((page) => !page.frontmatter.draft)
	return projects
}

// sort projects by order
export function sortProjects(projects) {
	return projects.sort((a, b) => {
		const orderA = a.frontmatter.order || 0
		const orderB = b.frontmatter.order || 0
		return orderA - orderB
	})
}

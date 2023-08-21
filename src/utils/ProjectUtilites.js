export function filterProjects(projects) {
	return projects.filter((page) => !page.frontmatter.draft)
}

// sort projects by order
export function sortProjects(projects) {
	return projects.sort((a, b) => {
		const orderA = a.frontmatter.order || 0
		const orderB = b.frontmatter.order || 0
		return orderA - orderB
	})
}

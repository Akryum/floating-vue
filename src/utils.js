
export function convertToArray (value) {
	if (typeof value === 'string') {
		value = value.split(' ')
	}
	return value
}

/**
 * Add classes to an element.
 * This method checks to ensure that the classes don't already exist before adding them.
 * It uses el.className rather than classList in order to be IE friendly.
 * @param {object} el - The element to add the classes to.
 * @param {classes} string - List of space separated classes to be added to the element.
 */
export function addClasses (el, classes) {
	const newClasses = convertToArray(classes)
	const classList = convertToArray(el.className)
	newClasses.forEach((newClass) => {
		if (classList.indexOf(newClass) === -1) {
			classList.push(newClass)
		}
	})
	el.className = classList.join(' ')
}

/**
 * Remove classes from an element.
 * It uses el.className rather than classList in order to be IE friendly.
 * @export
 * @param {any} el The element to remove the classes from.
 * @param {any} classes List of space separated classes to be removed from the element.
 */
export function removeClasses (el, classes) {
	const newClasses = convertToArray(classes)
	const classList = convertToArray(el.className)
	newClasses.forEach((newClass) => {
		const index = classList.indexOf(newClass)
		if (index !== -1) {
			classList.splice(index, 1)
		}
	})
	el.className = classList.join(' ')
}

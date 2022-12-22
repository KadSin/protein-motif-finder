export class Protein {
	private sequence: string

	constructor(sequence: string) {
		if(!/^[A-Z]+$/g.test(sequence)) {
			throw new Error('Sequence should contains UPPERCASE english letters')
		}

		this.sequence = sequence
	}

	public indexOf(pattern: string) {
		const indices: number[] = []
		let similarity = 0

		for(let i = 0; i < this.sequence.length; i++) {
			if(this.sequence[i] === pattern[similarity]) {
				similarity++
			} else {
				similarity = this.sequence[i] === pattern[0] ? 1 : 0
				continue
			}

			if(similarity === pattern.length) {
				indices.push(i - pattern.length + 1)
				similarity = 0
			}
		}

		return indices
	}
}
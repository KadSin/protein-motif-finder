import { Protein } from '../protein'

describe('Protein', () => {
	describe('indexOf(pattern)', () => {
		const protein = new Protein('ATGCGCGACGGCGTGATCAGCTTATAGCCGTACGACTGCTGCAACGTGACTGATCGTACGACTGCTGCAACGTGACTGAT')

		it('Should return correct index of finded motifs', () => {
			expect(protein.indexOf('ACG')).toStrictEqual([7, 31, 43, 57, 69])
		})

		it('Should return empty array on invalid pattern', () => {
			expect(protein.indexOf('XXX')).toStrictEqual([])
		})

		it('Should throw an error on get an invalid sequence format', () => {
			const fn = () => new Protein('a@ATTV')
			expect(fn).toThrowError('Sequence should contains UPPERCASE english letters')
		})
	})

	describe('fasta(path)', () => {
		const assets = `${ __dirname }/assets`

		it('Should throw an error on get a missing file path', () => {
			const fn = () => Protein.fasta(`${ assets }/missing-file`)
			expect(fn).toThrowError('File not found')
		})

		it('Should throw an error on get a file with fasta extension', () => {
			const fn = () => Protein.fasta(`${ assets }/bad-file.txt`)
			expect(fn).toThrowError('extension must be .fasta')
		})

		it('Should throw an error on get a file with non fasta format', () => {
			const fn = () => Protein.fasta(`${ assets }/bad-file.fasta`)
			expect(fn).toThrowError('fasta format is not valid')
		})

		it('Should get a Protein instance on get fasta extension', () => {
			const protein = Protein.fasta(`${ assets }/2HG4.fasta`)
			expect(protein).toBeInstanceOf(Protein)
		})
	})
})
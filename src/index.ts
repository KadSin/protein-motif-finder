import readline from 'readline'
import { Protein } from './protein'
const rl = readline.createInterface(process.stdin, process.stdout)

const RESET = '\x1b[0m'
const CYAN = '\x1b[36m'

rl.question(`${ CYAN }Enter '.fasta' file full path: ${ RESET }`, (fasta) => {
	const protein = Protein.fasta(fasta)

	rl.question(`${ CYAN }Enter pattern to find indices: ${ RESET }`, (pattern) => {
		console.log('Result:', protein.indexOf(pattern))
		rl.close()
	})
})
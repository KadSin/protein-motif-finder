import readline from 'readline'
import { Protein } from './protein'
const rl = readline.createInterface(process.stdin, process.stdout)

rl.question('Enter `.fasta` file full path: ', (fasta) => {
	const protein = Protein.fasta(fasta)

	rl.question('Enter pattern to find indices: ', (pattern) => {
		console.log(protein.indexOf(pattern))
		rl.close()
	})
})
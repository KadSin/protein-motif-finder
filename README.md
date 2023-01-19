# Fasta pattern finder

Its a program to find a pattern in a protein's sequence with overlap covering. Actually its a pattern finder in a string and return all of pattern positions which can find in main string.

**Time complexity**: O(n)

_Support overlapping_

#### How to find a pattern in a fasta file by CLI:

```BASH
npm run find
```

---

## Apis

#### How to find a pattern in a fasta file:

```JS
Import { Protein } from 'Protein'

Protein.fasta('.../fasta-path').find('EQ')
```

#### How to find a pattern in a sequence:

```JS
Import { Protein } from 'Protein'

const protein = new Protein('SEQUENCE')
protein.find('EQ') // return [1]

protein = new Protein('ACACABBAC')
protein.find('ACA') // return [0, 2]
```

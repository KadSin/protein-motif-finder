# Fasta pattern finder

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
protein.find('EQ')
```

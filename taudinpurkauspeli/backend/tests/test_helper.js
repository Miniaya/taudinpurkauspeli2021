const initialDifferentials = [
  {
    name: "TestDisease1",
  },
  {
    name: "TestDisease2",
  },
]

const initialCases = [
  {
    title: "TestCase1",
    hidden: true,
    anamnesis: "TestCase1Anamnesis",
  },
  {
    title: "TestCase2",
    hidden: true,
    anamnesis: "TestCase2Anamnesis",
  },
]

const initialDifferentialGroups = [
  {
    name: "TestDifferentialGroup1",
  },
  {
    name: "TestDifferentialGroup2",
  }
]

const initialDifferentialGroupUnderCases = [
  {
    differentialGroupId: 1,
    caseId: 1,
  },
  {
    differentialGroupId: 2,
    caseId: 2,
  },
]

const initialDifferentialsUnderCases = [
  {
    differentialGroupsUnderCaseId: 1,
    differentialId: 2,
    description: "Testi1",
  },
  {
    differentialGroupsUnderCaseId: 2,
    differentialId: 1,
    description: "Testi2"
  },
  {
    differentialGroupsUnderCaseId: 1,
    differentialId: 1,
    description: "Testi3"
  }
]

module.exports = {
  initialDifferentials,
  initialCases,
  initialDifferentialGroups,
  initialDifferentialGroupUnderCases,
  initialDifferentialsUnderCases,
}
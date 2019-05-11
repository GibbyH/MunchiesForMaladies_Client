export class Ailment {
  problemID: string;
  hcText: string;

  constructor(id: string, hcText: string) {
    this.problemID = id;
    this.hcText = hcText;
  }
}

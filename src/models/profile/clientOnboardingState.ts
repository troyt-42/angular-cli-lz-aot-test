export class ClientOnboardingState {

  id: string;
  number: number;

  constructor(
    id: string,
    number: number
  ) {
    this.id = id;
    this.number = number;
  }

  get url() {
    return `/clientOnboarding/${this.id}`;
  }

  get heading() {
    return `${this.id}Heading`;
  }

  get label() {
    return `${this.id}Label`;
  }

  get text() {
    return `${this.id}Text`;
  }

  get time() {
    return `${this.id}Time`;
  }

}
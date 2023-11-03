class orderingHourMessage {
  message: string;
  detail: string;
  isInRange: boolean;

  constructor(message: string, detail: string, isInRange: boolean) {
    this.message = message;
    this.detail = detail;
    this.isInRange = isInRange;
  }
}

export default orderingHourMessage;

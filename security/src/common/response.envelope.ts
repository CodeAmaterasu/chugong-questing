/**
 * Envelope for API response
 */
export class ResponseEnvelope {
  /**
   * Data to return
   */
  data: object;

  /**
   * Constructor
   * @param data data to return
   */
  constructor(data) {
    this.data = data;
  }
}

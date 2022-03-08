export default class ItemDTO{
  private _code: string;
  private _description: string;
  private _unitPrice: number;
  private _qtyOnHand: number;


  constructor(code: string, description: string, unitPrice: number, qtyOnHand: number) {
    this._code = code;
    this._description = description;
    this._unitPrice = unitPrice;
    this._qtyOnHand = qtyOnHand;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get unitPrice(): number {
    return this._unitPrice;
  }

  set unitPrice(value: number) {
    this._unitPrice = value;
  }

  get qtyOnHand(): number {
    return this._qtyOnHand;
  }

  set qtyOnHand(value: number) {
    this._qtyOnHand = value;
  }
}

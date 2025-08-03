export class IniativePlacing {
  public name: string;
  public init: number;
  public damage: number;
  public acted: boolean;

  constructor(name: string, init: number) {
    this.name = name;
    this.init = init;
    this.damage = 0;
    this.acted = false;
  }
}

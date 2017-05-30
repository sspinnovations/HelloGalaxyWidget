/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import { renderable, jsxFactory } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-hello-galaxy",
  emphasis: "esri-hello-galaxy--emphasis"
};

@subclass("esri.widgets.HelloGalaxy")
class HelloGalaxy extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  firstName
  //----------------------------------

  @property()
  @renderable()
  firstName: string = "Lone";

  //----------------------------------
  //  lastName
  //----------------------------------

  @property()
  @renderable()
  lastName: string = "Star";

  //----------------------------------
  //  emphasized
  //----------------------------------

  @property()
  @renderable()
  emphasized: boolean = false;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------


  render() {
    const greeting = this._getGreeting();
    const name = this._getName();
    const classes = {
      [CSS.emphasis]: this.emphasized
    };

    return (
      <div bind={this}
           class={CSS.base}
           classes={classes}>
      {greeting}
      <p>{name}</p>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _getGreeting(): string {
    return `So we meet again, for the first time, and the last time`;
  }

  private _getName(): string {
    return `${this.firstName} ${this.lastName}!`;
  }

}

export = HelloGalaxy;
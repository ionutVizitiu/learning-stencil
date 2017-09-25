import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'demo-page',
  styleUrl: 'demo-page.scss'
})
export class DemoPage {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}

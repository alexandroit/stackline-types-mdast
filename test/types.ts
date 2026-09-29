import type { Root, Paragraph, Text, Heading, Link } from '__PACKAGE__';
const text: Text = {type:'text',value:'hello'};
const paragraph: Paragraph = {type:'paragraph',children:[text]};
const root: Root = {type:'root',children:[paragraph]};
const heading: Heading = {type:'heading',depth:2,children:[text]};
const link: Link = {type:'link',url:'https://example.com',children:[text]};
// @ts-expect-error heading depth must be 1 through 6
const invalid: Heading = {type:'heading',depth:7,children:[]};

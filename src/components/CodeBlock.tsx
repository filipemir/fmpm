import styled from "@emotion/styled";
import {ReactNode} from "react";

const StyledPreWrapper = styled.div`
  background-color: #263238;
  margin: 0.5em 0 30px 0;
  padding: 0;
  overflow: auto;
  box-shadow: -10px 10px #E4E3E3;
  border-radius: 6px;
  max-width: 70ch;

  .highlight-line {
    background-color: #2f4549;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.5em;
    border-left: 0.5em solid #ffcb6b;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    color: #d8dee9;
    background: #253238;
    font-family: Roboto Mono, monospace;
    font-size: 15px;
    letter-spacing: -0.05em;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  code[class*='language-'] *::selection,
  pre[class*='language-'] *::selection {
    background-color: #2f4549 !important;
  }

  code[class*='language-']::-moz-selection,
  pre[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection,
  pre[class*='language-'] ::-moz-selection {
    background: #363636;
  }

  code[class*='language-']::selection,
  pre[class*='language-']::selection,
  code[class*='language-'] ::selection,
  pre[class*='language-'] ::selection {
    background: #363636;
  }

  pre[class*='language-'] {
    overflow: auto;
    position: relative;
    margin: 0.5em 0;
    padding: 1em;
  }

  /* Adjust the position of the line numbers */

  pre[class*='language-'].line-numbers {
    padding-left: 2.8em;
  }

  pre[class*='language-'].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }

  .line-numbers-rows > span:before {
    color: #42525a !important;
  }

  .line-numbers .line-numbers-rows {
    border-right-color: #3a4950 !important;
  }

  .command-line-prompt > span:before {
    color: #999;
    content: ' ';
    display: block;
    padding-right: 0.8em;
  }

  /* Prompt for all users */

  .command-line-prompt > span[data-user]:before {
    content: '[' attr(data-user) '@' attr(data-host) '] $';
  }

  /* Prompt for root */

  .command-line-prompt > span[data-user='root']:before {
    content: '[' attr(data-user) '@' attr(data-host) '] #';
  }

  .command-line-prompt > span[data-prompt]:before {
    content: attr(data-prompt);
  }

  .language-css > code,
  .language-sass > code,
  .language-scss > code {
    color: #fd9170;
  }

  [class*='language-'] .namespace {
    opacity: 0.7;
  }

  .token.atrule {
    color: #c792ea;
  }

  .token.attr-name {
    color: #ffcb6b;
  }

  .token.attr-value {
    color: #c3e88d;
  }

  .token.attribute {
    color: #c3e88d;
  }

  .token.boolean {
    color: #c792ea;
  }

  .token.builtin {
    color: #ffcb6b;
  }

  .token.cdata {
    color: #80cbc4;
  }

  .token.char {
    color: #80cbc4;
  }

  .token.class {
    color: #ffcb6b;
  }

  .token.class-name {
    color: #c0eb85;
  }

  .token.color {
    color: #f2ff00;
  }

  .token.comment {
    color: #546e7a;
  }

  .token.constant {
    /*color: #c792ea;*/
  }

  .token.deleted {
    color: #f07178;
  }

  .token.doctype {
    color: #546e7a;
  }

  .token.entity {
    color: #f07178;
  }

  .token.function {
    color: #759bf3;
  }

  .token.hexcode {
    color: #f2ff00;
  }

  .token.id {
    color: #c792ea;
    font-weight: bold;
  }

  .token.important {
    color: #c792ea;
    font-weight: bold;
  }

  .token.inserted {
    color: #80cbc4;
  }

  .token.keyword {
    color: #c289e5;
    font-style: italic;
  }

  .token.number {
    color: #fd9170;
  }

  .token.operator {
    color: #89ddff;
  }

  .token.parameter {
    color: #f98c65;
  }

  .token.prolog {
    color: #546e7a;
  }

  .token.property {
    color: #80cbc4;
  }

  .token.pseudo-class {
    color: #c3e88d;
  }

  .token.pseudo-element {
    color: #c3e88d;
  }

  .token.punctuation {
    color: #89ddff;
  }

  .token.regex {
    color: #f2ff00;
  }

  .token.selector {
    color: #f07178;
  }

  .token.string {
    color: #c3e88d;
  }

  .token.symbol {
    color: #c792ea;
  }

  .token.tag {
    color: #f07178;
  }

  .token.unit {
    color: #f07178;
  }

  .token.url {
    color: #fd9170;
  }

  .token.variable {
    color: #f07178;
  }
`

const StyledPre = styled.pre`
  font-weight: 400;
  font-style: normal;
`

const CodeBlock = ({
   children,
   className
}: {
    children: ReactNode;
    className: string

}) => {
    return <StyledPreWrapper>
        <StyledPre className={className}>{children}</StyledPre>
    </StyledPreWrapper>
}

export default CodeBlock
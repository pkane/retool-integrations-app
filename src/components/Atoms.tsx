import styled from "styled-components";

// Import integrations icon svgs
import bigquery from '../assets/icons/bigquery.svg';
import couchdb from '../assets/icons/couchdb.svg';
import googlesheets from '../assets/icons/google-sheets.svg';
import jira from '../assets/icons/jira.svg';
import mongodb from '../assets/icons/mongodb.svg';
import oracle from '../assets/icons/oracle.svg';
import postgresql from '../assets/icons/postgresql.svg';
import salesforce from '../assets/icons/salesforce.svg';
import snowflake from '../assets/icons/snowflake.svg';
import stripe from '../assets/icons/stripe.svg';
import twilio from '../assets/icons/twilio.svg';
import closeBtn from '../assets/icons/close-btn.svg';

export const Wrapper = styled.section`
  font-family: sans-serif;
  text-align: center;
  width: 800px;
  height: 256px;
  display: flex;
  font-family: "Inter", sans-serif;
  position: relative;
  margin: auto;
  overflow-x: hidden;
  flex-flow: column;
  box-sizing: border-box;

  .marquee-outer {
    position: relative;
    width: 1590px;
    overflow: hidden;
    height: 100%;    
  }

  .marquee-inner {
    width: 200%;
    position: absolute;
    animation: marquee 20s linear infinite;
    pointer-events: auto;
    cursor: pointer;

    &:nth-child(2n) {
      animation-duration: 25s;
      animation-delay: -3s;
    }

    &:nth-child(3) {
      animation-delay: -6s;
    }    

    &:nth-child(4) {
      animation-delay: -9s;
    }        

    &:hover {
      animation-play-state: paused;      
    }
  }

  .row {
    display: flex;
    gap: 12px;
    width: 50%;
    float: left;
    justify-content: start;
    flex-flow: nowrap;
    margin-bottom: 12px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(90deg, var(--body-bg) 0%, rgba(0, 0, 0, 0.00) 17.19%, rgba(0, 0, 0, 0.00) 84.37%, var(--body-bg) 100%);    
    // Alternate method for fade-out below.
    // box-shadow: inset 30px 0 20px -16px var(--body-bg), inset -20px 0 30px -16px var(--body-bg);
  }
`;

export const PillDiv = styled.div`
  color: var(--grays-medium-gray-555, #555);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1em; /* 125% */
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.02),
    0px 1px 2px 0px rgba(0, 0, 0, 0.04);
  transition: box-shadow ease-in 100ms;

  &:hover {
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.12);    
  }

  .icon {
    height: 24px;
    width: 24px;
    display: inline-block;
  }
`;

export const Icon = styled.span`
  background-size: 100%;

  &.big-query {
    background-image: url(${bigquery})
  }

  &.sales-force {
    background-image: url(${salesforce})
  }

  &.mongo-db {
    background-image: url(${mongodb})
  }

  &.snowflake {
    background-image: url(${snowflake})
  }

  &.oracle {
    background-image: url(${oracle})
  }

  &.twilio {
    background-image: url(${twilio})
  }

  &.google-sheets {
    background-image: url(${googlesheets})
  }

  &.stripe {
    background-image: url(${stripe})
  }

  &.couch-db {
    background-image: url(${couchdb})
  }

  &.postgre-sql {
    background-image: url(${postgresql})
  }

  &.jira {
    background-image: url(${jira})
  } 
`

export const ModalBackgroundStyled = styled.div`
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 30rem;
  z-index: 5;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  width: 593px;
  padding: 52px 50px 52px 32px;
  align-items: flex-start;
  gap: 24px;

  .icon {
    height: 63px;
    width: 63px;
    display: block;
    transform: scale(1.125);
  }

  .integration-content {
    text-align: left;
    flex: 1;

    h2 {
      margin: 0 0 12px;
    }

    p {
      color: var(--grays-gray-text-secondary-6-a-6-a-6-a, #6A6A6A);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      text-align: left;    
    } 
  }  

  .close-btn {
    background: url(${closeBtn});
    background-size: cover;
    border: none;
    position: absolute;
    height: 12px;
    width: 12px;
    top: 20px;
    right: 20px;
    z-index: 1;
    color:transparent;
    svg {
      font-size: 1.5em;
    }
    &:hover {
      cursor: pointer;
    }    
  }
`;
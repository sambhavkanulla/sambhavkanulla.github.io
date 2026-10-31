---
title: "Post Order Experience: My Orders, Returns Management and Order Orchestration"
company: "TMRW, House of Brands"
period: "2025-present"
role: "Associate Director of Product, owner of the post-order platform"
team: "Product, engineering, design, data and CX operations"
scale: "A multi-tenant post-order platform for Shopify D2C brands in the group"
tagline: "A large, connected product suite that takes a customer from 'where is my order?' to returns, exchanges, cancellations and refunds, with the internal tools to run it."
order: 5
featured: true
metrics:
  - value: "-90%"
    label: "CX tickets"
  - value: "₹3 Cr"
    label: "(about $300k) saved in 3PL costs"
  - value: "10 min"
    label: "CX turnaround with the internal OMS tool"
  - value: "87%"
    label: "CSAT (up to)"
---

## Context

After a customer pays, the experience splits into many moving parts: tracking, communication, delivery issues, cancellations, returns, exchanges and refunds. In a D2C business these are also the main source of support tickets and 3PL cost. I built the post-order experience for the group's Shopify brands as one connected product, not as separate features.

## Scope: one project, many products

This was a single large initiative made up of several products that depend on each other:

- **Custom My Orders on the storefront:** order tracking and communication, connected to the returns workflows, with returns, exchanges and cancellations built in
- **Home-grown Returns Management System (RMS):** the complete returns and refunds engine for Shopify brands, with automated flows, replacing reliance on third-party returns costs
- **Internal Order Management System (OMS) tool:** post-order tracking, management and orchestration for CX and operations teams, and the tool the teams use for post-game and root-cause analysis of order issues
- **Post-order fraud detection:** monitoring and blocking fraudsters after the order is placed, saving 85% of revenue leakage

<!-- ADD (this is where the size of the project shows): how many brands, how many order and return states or reasons, how many teams and systems it touches (CX, warehouse, logistics, finance), how many months it took, and how many engineers worked on it. Only add what you are comfortable sharing publicly. -->

## Why it was complex

- **Many customer journeys in one flow:** tracking, cancellations, returns, exchanges and refunds each have different rules, and the customer sees them as a single My Orders page
- **A storefront experience tied to back-office workflows:** every action on My Orders has to trigger the right step in the RMS and the right update for CX and operations
- **Multi-tenant by design:** built so that several brands can use the same platform while keeping brand-specific rules
- **Real operations depend on it:** the OMS tool is used day to day to resolve customer order issues and to find root causes

<!-- ADD: the hardest integration or edge case, e.g. refunds, partial returns, third-party logistics or Shopify constraints. Confirm which third-party OMS, WMS, LMS and logistics partners this platform actually connects to before naming any. -->

## Approach

<!-- ADD: build vs. buy reasoning, how you phased the launch across brands, how you measured ticket reduction. -->

## Results

- CX tickets down 90%
- ₹3 Cr (about $300k) saved in 3PL costs, with more efficient returns and refunds and expanded capabilities
- CX turnaround down to 10 minutes and CSAT improved up to 87% with the internal OMS tool
- 85% of post-order revenue leakage from fraud saved

## What I would do differently

<!-- ADD: one or two honest lessons. -->

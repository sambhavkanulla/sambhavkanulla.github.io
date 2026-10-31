---
title: "Post Order Experience"
company: "TMRW, House of Brands"
period: "2025-present"
role: "Associate Director of Product, owner of the post-order platform"
team: "Product, engineering, design, data and CX operations"
scale: "A multi-tenant post-order platform for D2C brands in the group"
tagline: "One connected suite: My Orders, returns and refunds, order orchestration and the internal tools behind them."
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

After checkout, the experience splits into tracking, communication, cancellations, returns, exchanges and refunds. In D2C these drive most support tickets and 3PL cost. I built it for the group's brands as one connected product, not separate features.

## Scope: one project, many products

- **My Orders:** tracking and communication on the storefront, connected to returns, exchanges and cancellations
- **Returns Management System (RMS):** a home-grown returns and refunds engine with automated flows
- **Internal OMS tool:** post-order tracking, management and orchestration for CX and operations, also used for root-cause analysis
- **Post-order fraud detection:** monitors and blocks fraudsters, saving 85% of revenue leakage

<!-- ADD (this is where the size of the project shows): how many brands, how many order and return states or reasons, how many teams and systems it touches (CX, warehouse, logistics, finance), how many months it took, and how many engineers worked on it. Only add what you are comfortable sharing publicly. -->

## Why it was complex

- **Many journeys, one flow:** tracking, cancellations, returns, exchanges and refunds each follow different rules, but the customer sees one My Orders page
- **Storefront tied to back-office:** every customer action must trigger the right step in the RMS and the right update for CX and operations
- **Multi-tenant:** several brands share one platform, each with its own rules
- **Operations depend on it:** teams use the OMS tool daily to resolve issues and find root causes

<!-- ADD: the hardest integration or edge case, e.g. refunds, partial returns, third-party logistics or storefront-platform constraints. Confirm which third-party OMS, WMS, LMS and logistics partners this platform actually connects to before naming any. -->

## Approach

<!-- ADD: build vs. buy reasoning, how you phased the launch across brands, how you measured ticket reduction. -->

## Results

- CX tickets down 90%
- ₹3 Cr (about $300k) saved in 3PL costs, with more efficient returns and refunds
- CX turnaround down to 10 minutes, CSAT up to 87% with the OMS tool
- 85% of post-order fraud revenue leakage saved

## What I would do differently

<!-- ADD: one or two honest lessons. -->

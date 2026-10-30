# Noa Refund Branch Review

The refund calculation is incorrect because it applies the 90% refund rate to
the combined ticket price and service fee. The service fee must not be refunded,
so the formula should refund only `TICKET_PRICE * REFUND_RATE` per ticket.
Tests confirm the current branch returns 325.8 for one ticket and 651.6 for two
tickets instead of 315 and 630.

I recommend fixing the refund implementation and extending the tests before
merging this branch into main. Noa's branch is not merged as part of this review.

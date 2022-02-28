class BidsController < ApplicationController

  def create
    bid = Bid.create(bid_params.merge(user_id:current_user.id))
    if bid.valid?
      render json: bid
    else
      render json: bid.errors, status: 422
    end
  end

private
  def bid_params
  params.require(:bid).permit(:price, :auction_item_id)
  end
end

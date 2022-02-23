class AuctionItemsController < ApplicationController

  def index
   auction_items = AuctionItem.all
   render json: auction_items
 end

  def create
    auction_item = AuctionItem.create(auction_item_params)
    if auction_item.valid?
      render json: auction_item
    else
      render json: auction_item.errors, status: 422
    end
  end

  def update
    auction_item = AuctionItem.find(params[:id])
    auction_item.update(auction_item_params)
    if auction_item.valid?
      render json: auction_item
    else
      render json: auction_item.errors, status: 422
    end
  end
  
  def destroy
    auction_item = AuctionItem.find(params[:id])
    auction_item.destroy
    render json: auction_item
  end

  private
  def auction_item_params
    params.permit(:title, :celebrity_image_url, :description, :highest_bid_price, :highest_bid_user_id, :start_date_time, :end_date_time, :charity_name, :charity_url, :has_a_winner, :user_id)
  end
end

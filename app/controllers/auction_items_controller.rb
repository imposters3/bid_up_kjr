class AuctionItemsController < ApplicationController

  def create
    AuctionItem.create(params)
  end

end

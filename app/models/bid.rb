class Bid < ApplicationRecord
  belongs_to :user
  belongs_to :auction_item
  validate :higher_than_highest_bid?
  def higher_than_highest_bid?
    return if persisted?
    if price > auction_item.current_bid_price
      return 
    end
    errors.add :price, "price must be higher than current highest bid."
  end
end

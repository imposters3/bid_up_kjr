class AuctionItem < ApplicationRecord
  belongs_to :user
  has_many :bids
end

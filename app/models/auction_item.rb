class AuctionItem < ApplicationRecord
  belongs_to :user
  has_many :bids
  attribute :highest_bid_username
  attribute :current_bid_price
  validates :highest_bid_price, presence: true
  validates :title, presence: true
  validates :celebrity_image_url, presence: true
  validates :description, presence: true
  validates :start_date_time, presence: true
  validates :end_date_time, presence: true
  validates :charity_name, presence: true
  validates :charity_url, presence: true
  def highest_bid
    bids.order("bids.price DESC").limit(1).first
  end
  def highest_bid_username
    highest_bid&.user&.username
  end
  def current_bid_price
    return highest_bid&.price if highest_bid.present?
    return highest_bid_price if highest_bid_price.present?
    return 0
  end
end
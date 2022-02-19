class CreateAuctionItems < ActiveRecord::Migration[6.1]
  def change
    create_table :auction_items do |t|
      t.string :title
      t.text :celebrity_image_url
      t.text :description
      t.integer :highest_bid_price
      t.integer :highest_bid_user_id
      t.datetime :start_date_time
      t.datetime :end_date_time
      t.string :charity_name
      t.text :charity_url
      t.boolean :has_a_winner
      t.integer :user_id

      t.timestamps
    end
  end
end

class AddTopImageToAccounts < ActiveRecord::Migration
  def change
    add_column :accounts, :top_image, :string
  end
end

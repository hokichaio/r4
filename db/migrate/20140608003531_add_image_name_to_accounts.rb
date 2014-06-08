class AddImageNameToAccounts < ActiveRecord::Migration
  def change
    add_column :accounts, :image, :string
    add_column :accounts, :name, :string
  end
end

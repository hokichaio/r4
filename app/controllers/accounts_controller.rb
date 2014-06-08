class AccountsController < ApplicationController
  before_filter :authenticate_account!, :except => [:index]
  
  # GET /accounts
  # GET /accounts.json
  def index
    @accounts = Account.where(:account_type_master_id => Account::TYPE_USER)
    render :json => @accounts
  end

  # GET /accounts/1
  # GET /accounts/1.json
  def show
  end
  
end

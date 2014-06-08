class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    logger.info(request.env["omniauth.auth"])
    @account = Account.find_for_facebook_oauth(request.env["omniauth.auth"])
    
    if @account.persisted?
      @account.facebook_update(request.env["omniauth.auth"])
      logger.info(@account)
      @account.save
      sign_in_and_redirect @account, :event => :authentication #this will throw if @account is not activated
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"].except("extra")
      #redirect_to new_account_registration_url
    end
  end
  
end
class Account < ActiveRecord::Base
  TYPE_ADMIN = 1
  TYPE_USER = 2
  devise :database_authenticatable, 
         :registerable,
         :validatable,
         :omniauthable, :omniauth_providers => [:facebook]
  
  validates :email, :encrypted_password, :account_type_master_id, :presence => true
  validates :account_type_master_id, :inclusion => [TYPE_ADMIN, TYPE_USER]
  before_validation :sign_up_as_user
  
  def is_admin?
    self.account_type_master_id == 1
  end
  def is_user?
    self.account_type_master_id == 2
  end
  
  def sign_up_as_user
    self.account_type_master_id = 2
  end

  def self.find_for_facebook_oauth(auth)
    where(auth.slice(:provider, :uid)).first_or_create do |account|
      account.provider = auth.provider
      account.uid = auth.uid
      account.password = Devise.friendly_token[0,20]
      account.image = auth.info.image + "?type=large"
      account.facebook_update(auth)
    end
  end
  
  def facebook_update(auth)
    self.email = auth.info.email
    self.name = auth.info.name
    self.top_image = auth.info.image
  end

end

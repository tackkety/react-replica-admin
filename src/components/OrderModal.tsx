import { useState, useEffect } from 'react';
import { servicePricing } from '@/data/servicePricing';

const OrderModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentService, setCurrentService] = useState('');
  const [currentIcon, setCurrentIcon] = useState('');
  const [selections, setSelections] = useState<any>({});
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showServiceSelection, setShowServiceSelection] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleOpenModal = (e: any) => {
      const { service, icon } = e.detail;
      setCurrentService(service);
      setCurrentIcon(icon);
      setSelections({});
      setQuantity(1);
      setIsOpen(true);
    };

    const handleShowServiceSelection = () => {
      setShowServiceSelection(true);
    };

    window.addEventListener('openOrderModal', handleOpenModal);
    window.addEventListener('showServiceSelection', handleShowServiceSelection);

    return () => {
      window.removeEventListener('openOrderModal', handleOpenModal);
      window.removeEventListener('showServiceSelection', handleShowServiceSelection);
    };
  }, []);

  useEffect(() => {
    updateTotalAmount();
  }, [selections, quantity]);

  const updateTotalAmount = () => {
    let total = 0;
    const service = (servicePricing as any)[currentService];
    
    if (!service) {
      setTotalAmount(0);
      return;
    }

    if (currentService === 'graphic-design' || currentService === 'video-editing') {
      const typeKey = currentService === 'graphic-design' ? 'designType' : 'videoType';
      if (selections[typeKey] && selections.packageType) {
        const option = service.options[selections[typeKey]];
        if (selections.packageType === 'single') {
          total = option.single * quantity;
        } else {
          total = option.package;
        }
      }
    } else if (currentService === 'tech-development') {
      if (selections.tier) {
        total = selections.tier.price;
      }
    }
    
    setTotalAmount(total);
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowServiceSelection(false);
  };

  const handleServiceSelect = (service: string) => {
    setShowServiceSelection(false);
    const icon = service === 'graphic-design' ? 'bx bx-code-alt' : 
                 service === 'video-editing' ? 'bx bx-paint' : 'bx bx-bar-chart-alt';
    const event = new CustomEvent('openOrderModal', { 
      detail: { service, icon }
    });
    window.dispatchEvent(event);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidSelection()) {
      alert('Please select service options before submitting your order.');
      return;
    }

    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const orderId = 'AFR' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
    
    const orderData = {
      orderId,
      serviceName: (servicePricing as any)[currentService].name,
      serviceDetails: getServiceDetails(),
      total: totalAmount,
      customerName: formData.get('name'),
      customerEmail: formData.get('email'),
      customerPhone: formData.get('phone'),
      requirements: formData.get('requirements'),
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // Store order locally
    const orders = JSON.parse(localStorage.getItem('afrirobotOrders') || '[]');
    orders.push(orderData);
    localStorage.setItem('afrirobotOrders', JSON.stringify(orders));

    setLoading(false);
    alert(`Order submitted successfully! Your Order ID is: ${orderId}`);
    closeModal();
    (e.target as HTMLFormElement).reset();
  };

  const getServiceDetails = () => {
    const service = (servicePricing as any)[currentService];
    
    if (currentService === 'graphic-design' || currentService === 'video-editing') {
      const typeKey = currentService === 'graphic-design' ? 'designType' : 'videoType';
      const option = service.options[selections[typeKey]];
      return `${option.name} - ${selections.packageType === 'single' ? `Single (${quantity}x)` : 'Bundle Package'}`;
    } else if (currentService === 'tech-development') {
      return `${service.options[selections.devType].name} - ${selections.tier?.name}`;
    }
    return '';
  };

  const isValidSelection = () => {
    if (currentService === 'graphic-design') {
      return selections.designType && selections.packageType;
    } else if (currentService === 'video-editing') {
      return selections.videoType && selections.packageType;
    } else if (currentService === 'tech-development') {
      return selections.devType && selections.tier;
    }
    return false;
  };

  if (showServiceSelection) {
    return (
      <div className={`service-selection-modal ${showServiceSelection ? 'active' : ''}`} onClick={closeModal}>
        <div className="service-selection-content" onClick={(e) => e.stopPropagation()}>
          <div className="service-selection-header">
            <h3>Choose a Service</h3>
            <span className="close-service-modal" onClick={closeModal}>&times;</span>
          </div>
          <div className="service-options">
            <div className="service-option" onClick={() => handleServiceSelect('graphic-design')}>
              <div className="service-icon">
                <i className='bx bx-pencil'></i>
              </div>
              <h4>Graphic Design</h4>
              <p>From $15/design</p>
            </div>
            <div className="service-option" onClick={() => handleServiceSelect('video-editing')}>
              <div className="service-icon">
                <i className='bx bx-video'></i>
              </div>
              <h4>Video Editing</h4>
              <p>From $25/video</p>
            </div>
            <div className="service-option" onClick={() => handleServiceSelect('tech-development')}>
              <div className="service-icon">
                <i className='bx bx-code-alt'></i>
              </div>
              <h4>Tech Development</h4>
              <p>From $300/project</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isOpen) return null;

  const service = (servicePricing as any)[currentService];
  if (!service) return null;

  return (
    <>
      <div className="modal-overlay active" onClick={closeModal}></div>
      <div className="half-page-modal active">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Place Your Order</h3>
            <span className="close-modal" onClick={closeModal}>&times;</span>
          </div>
          <div className="modal-body">
            <div className="service-info">
              <i className={currentIcon}></i>
              <h4>{service.name}</h4>
              <p>{service.description}</p>
            </div>
            
            <div className="service-selection">
              {(currentService === 'graphic-design' || currentService === 'video-editing') && (
                <>
                  <div className="service-option-group">
                    <h5><i className='bx bx-category'></i> Select {currentService === 'graphic-design' ? 'Design' : 'Video'} Type</h5>
                    <div className="option-buttons">
                      {Object.entries(service.options).map(([key, option]: any) => (
                        <button 
                          key={key}
                          className={`option-btn ${selections[currentService === 'graphic-design' ? 'designType' : 'videoType'] === key ? 'active' : ''}`}
                          onClick={() => setSelections({ ...selections, [currentService === 'graphic-design' ? 'designType' : 'videoType']: key, packageType: null })}
                        >
                          {option.name}
                          {option.description && <><br /><small>{option.description}</small></>}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {selections[currentService === 'graphic-design' ? 'designType' : 'videoType'] && (
                    <div className="service-option-group">
                      <h5><i className='bx bx-package'></i> Choose Package</h5>
                      <div className="package-options">
                        <div 
                          className={`package-option ${selections.packageType === 'single' ? 'active' : ''}`}
                          onClick={() => setSelections({ ...selections, packageType: 'single' })}
                        >
                          <h6>Single {currentService === 'graphic-design' ? 'Design' : 'Video'}</h6>
                          <div className="price">${service.options[selections[currentService === 'graphic-design' ? 'designType' : 'videoType']].single}</div>
                          <small>Per {currentService === 'graphic-design' ? 'design' : 'video'}</small>
                        </div>
                        <div 
                          className={`package-option ${selections.packageType === 'bundle' ? 'active' : ''}`}
                          onClick={() => setSelections({ ...selections, packageType: 'bundle' })}
                        >
                          <h6>Bundle Package</h6>
                          <div className="price">${service.options[selections[currentService === 'graphic-design' ? 'designType' : 'videoType']].package}</div>
                          <div className="savings">Save ${(service.options[selections[currentService === 'graphic-design' ? 'designType' : 'videoType']].single * service.options[selections[currentService === 'graphic-design' ? 'designType' : 'videoType']].packageCount) - service.options[selections[currentService === 'graphic-design' ? 'designType' : 'videoType']].package}</div>
                          <small>{service.options[selections[currentService === 'graphic-design' ? 'designType' : 'videoType']].packageCount} {currentService === 'graphic-design' ? 'designs' : 'videos'}</small>
                        </div>
                      </div>
                      {selections.packageType === 'single' && (
                        <div className="quantity-selector" style={{ display: 'flex' }}>
                          <label htmlFor="quantity">Quantity:</label>
                          <input 
                            type="number" 
                            id="quantity" 
                            className="quantity-input" 
                            min="1" 
                            value={quantity} 
                            max="50"
                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
              
              {currentService === 'tech-development' && (
                <>
                  <div className="service-option-group">
                    <h5><i className='bx bx-category'></i> Select Development Type</h5>
                    <div className="option-buttons">
                      {Object.entries(service.options).map(([key, option]: any) => (
                        <button 
                          key={key}
                          className={`option-btn ${selections.devType === key ? 'active' : ''}`}
                          onClick={() => setSelections({ ...selections, devType: key, tier: null })}
                        >
                          {option.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {selections.devType && (
                    <div className="service-option-group">
                      <h5><i className='bx bx-stats'></i> Select Tier</h5>
                      <div className="package-options">
                        {service.options[selections.devType].tiers.map((tier: any) => (
                          <div 
                            key={tier.name}
                            className={`package-option ${selections.tier?.name === tier.name ? 'active' : ''}`}
                            onClick={() => setSelections({ ...selections, tier })}
                          >
                            <h6>{tier.name}</h6>
                            <div className="price">${tier.price}</div>
                            <small>{tier.description}</small>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="order-summary">
              <h4>Order Summary</h4>
              <div className="summary-items">
                {isValidSelection() && (
                  <div className="summary-item">
                    <div className="item-details">{getServiceDetails()}</div>
                    <div className="item-price">${totalAmount}</div>
                  </div>
                )}
              </div>
              <div className="total-price">
                <strong>Total: $<span>{totalAmount}</span></strong>
              </div>
            </div>

            <form className="order-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <textarea name="requirements" placeholder="Project Details & Requirements" rows={3} required></textarea>
              </div>
              <button type="submit" className="submit-order-btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Order Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
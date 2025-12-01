import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Order {
  orderId: string;
  serviceName: string;
  serviceDetails: string;
  total: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  requirements: string;
  timestamp: string;
  status: string;
}

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const Admin = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'messages' | 'stats'>('orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    if (!localStorage.getItem('adminLoggedIn')) {
      navigate('/admin/login');
      return;
    }

    // Load orders from localStorage
    const storedOrders = localStorage.getItem('afrirobotOrders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }

    // Load messages from localStorage
    const storedMessages = localStorage.getItem('afrirobotMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    const updatedOrders = orders.map(order =>
      order.orderId === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('afrirobotOrders', JSON.stringify(updatedOrders));
  };

  const deleteOrder = (orderId: string) => {
    if (confirm('Are you sure you want to delete this order?')) {
      const updatedOrders = orders.filter(order => order.orderId !== orderId);
      setOrders(updatedOrders);
      localStorage.setItem('afrirobotOrders', JSON.stringify(updatedOrders));
    }
  };

  const toggleMessageRead = (messageId: string) => {
    const updatedMessages = messages.map(msg =>
      msg.id === messageId ? { ...msg, read: !msg.read } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('afrirobotMessages', JSON.stringify(updatedMessages));
  };

  const deleteMessage = (messageId: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      const updatedMessages = messages.filter(msg => msg.id !== messageId);
      setMessages(updatedMessages);
      localStorage.setItem('afrirobotMessages', JSON.stringify(updatedMessages));
    }
  };

  const filteredOrders = filterStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  const stats = {
    totalOrders: orders.length,
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    completedOrders: orders.filter(o => o.status === 'completed').length,
    totalRevenue: orders.reduce((sum, o) => sum + o.total, 0),
    totalMessages: messages.length,
    unreadMessages: messages.filter(m => !m.read).length
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-color)',
      padding: '2rem'
    }}>
      {/* Header */}
      <div style={{
        background: 'var(--second-bg-color)',
        padding: '2rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid rgba(12, 204, 255, 0.2)'
      }}>
        <h1 style={{ 
          color: 'var(--text-color)',
          fontSize: '2.5rem'
        }}>
          Afrirobot <span style={{ color: 'var(--main-color)' }}>Admin Dashboard</span>
        </h1>
        <div>
          <a href="/" className="btn" style={{ marginRight: '1rem' }}>
            View Site
          </a>
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <button 
          className="btn"
          onClick={() => setActiveTab('stats')}
          style={{
            opacity: activeTab === 'stats' ? 1 : 0.6
          }}
        >
          <i className='bx bx-bar-chart'></i> Statistics
        </button>
        <button 
          className="btn"
          onClick={() => setActiveTab('orders')}
          style={{
            opacity: activeTab === 'orders' ? 1 : 0.6
          }}
        >
          <i className='bx bx-package'></i> Orders ({orders.length})
        </button>
        <button 
          className="btn"
          onClick={() => setActiveTab('messages')}
          style={{
            opacity: activeTab === 'messages' ? 1 : 0.6
          }}
        >
          <i className='bx bx-envelope'></i> Messages ({stats.unreadMessages})
        </button>
      </div>

      {/* Statistics Tab */}
      {activeTab === 'stats' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: 'var(--second-bg-color)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(12, 204, 255, 0.2)'
          }}>
            <i className='bx bx-package' style={{ fontSize: '3rem', color: 'var(--main-color)' }}></i>
            <h3 style={{ color: 'var(--text-color)', fontSize: '2rem', marginTop: '1rem' }}>Total Orders</h3>
            <p style={{ color: 'var(--main-color)', fontSize: '3rem', fontWeight: 'bold' }}>{stats.totalOrders}</p>
          </div>
          
          <div style={{
            background: 'var(--second-bg-color)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(12, 204, 255, 0.2)'
          }}>
            <i className='bx bx-time' style={{ fontSize: '3rem', color: '#ff9800' }}></i>
            <h3 style={{ color: 'var(--text-color)', fontSize: '2rem', marginTop: '1rem' }}>Pending</h3>
            <p style={{ color: '#ff9800', fontSize: '3rem', fontWeight: 'bold' }}>{stats.pendingOrders}</p>
          </div>
          
          <div style={{
            background: 'var(--second-bg-color)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(12, 204, 255, 0.2)'
          }}>
            <i className='bx bx-check-circle' style={{ fontSize: '3rem', color: '#4caf50' }}></i>
            <h3 style={{ color: 'var(--text-color)', fontSize: '2rem', marginTop: '1rem' }}>Completed</h3>
            <p style={{ color: '#4caf50', fontSize: '3rem', fontWeight: 'bold' }}>{stats.completedOrders}</p>
          </div>
          
          <div style={{
            background: 'var(--second-bg-color)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(12, 204, 255, 0.2)'
          }}>
            <i className='bx bx-dollar' style={{ fontSize: '3rem', color: 'var(--main-color)' }}></i>
            <h3 style={{ color: 'var(--text-color)', fontSize: '2rem', marginTop: '1rem' }}>Revenue</h3>
            <p style={{ color: 'var(--main-color)', fontSize: '3rem', fontWeight: 'bold' }}>${stats.totalRevenue}</p>
          </div>
          
          <div style={{
            background: 'var(--second-bg-color)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(12, 204, 255, 0.2)'
          }}>
            <i className='bx bx-envelope' style={{ fontSize: '3rem', color: 'var(--main-color)' }}></i>
            <h3 style={{ color: 'var(--text-color)', fontSize: '2rem', marginTop: '1rem' }}>Messages</h3>
            <p style={{ color: 'var(--main-color)', fontSize: '3rem', fontWeight: 'bold' }}>{stats.totalMessages}</p>
          </div>
          
          <div style={{
            background: 'var(--second-bg-color)',
            padding: '2rem',
            borderRadius: '1rem',
            border: '1px solid rgba(12, 204, 255, 0.2)'
          }}>
            <i className='bx bx-mail-send' style={{ fontSize: '3rem', color: '#ff9800' }}></i>
            <h3 style={{ color: 'var(--text-color)', fontSize: '2rem', marginTop: '1rem' }}>Unread</h3>
            <p style={{ color: '#ff9800', fontSize: '3rem', fontWeight: 'bold' }}>{stats.unreadMessages}</p>
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div style={{
          background: 'var(--second-bg-color)',
          padding: '2rem',
          borderRadius: '1rem',
          border: '1px solid rgba(12, 204, 255, 0.2)'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ color: 'var(--text-color)', fontSize: '1.6rem', marginRight: '1rem' }}>
              Filter by Status:
            </label>
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--bg-color)',
                color: 'var(--text-color)',
                border: '1px solid rgba(12, 204, 255, 0.3)',
                borderRadius: '0.5rem',
                fontSize: '1.6rem'
              }}
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              color: 'var(--text-color)',
              fontSize: '1.4rem'
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(12, 204, 255, 0.3)' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Order ID</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Customer</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Service</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Total</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Status</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map(order => (
                  <tr key={order.orderId} style={{ borderBottom: '1px solid rgba(12, 204, 255, 0.1)' }}>
                    <td style={{ padding: '1rem' }}>{order.orderId}</td>
                    <td style={{ padding: '1rem' }}>
                      {order.customerName}<br />
                      <small style={{ color: 'var(--main-color)' }}>{order.customerEmail}</small>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      {order.serviceName}<br />
                      <small>{order.serviceDetails}</small>
                    </td>
                    <td style={{ padding: '1rem' }}>${order.total}</td>
                    <td style={{ padding: '1rem' }}>
                      <select 
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.orderId, e.target.value)}
                        style={{
                          padding: '0.5rem',
                          background: 'var(--bg-color)',
                          color: order.status === 'completed' ? '#4caf50' : order.status === 'cancelled' ? '#f44336' : '#ff9800',
                          border: 'none',
                          borderRadius: '0.3rem'
                        }}
                      >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <button 
                        onClick={() => deleteOrder(order.orderId)}
                        style={{
                          background: '#f44336',
                          color: 'white',
                          padding: '0.5rem 1rem',
                          borderRadius: '0.3rem',
                          cursor: 'pointer',
                          border: 'none'
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && (
            <p style={{ 
              textAlign: 'center', 
              color: 'var(--text-color)', 
              padding: '2rem',
              fontSize: '1.6rem'
            }}>
              No orders found
            </p>
          )}
        </div>
      )}

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <div style={{
          background: 'var(--second-bg-color)',
          padding: '2rem',
          borderRadius: '1rem',
          border: '1px solid rgba(12, 204, 255, 0.2)'
        }}>
          {messages.map(message => (
            <div 
              key={message.id}
              style={{
                background: message.read ? 'rgba(12, 204, 255, 0.05)' : 'rgba(12, 204, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                border: '1px solid rgba(12, 204, 255, 0.2)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: 'var(--main-color)', fontSize: '1.8rem' }}>
                    {message.name}
                    {!message.read && (
                      <span style={{ 
                        background: '#ff9800',
                        color: 'white',
                        padding: '0.2rem 0.8rem',
                        borderRadius: '1rem',
                        fontSize: '1.2rem',
                        marginLeft: '1rem'
                      }}>
                        NEW
                      </span>
                    )}
                  </h4>
                  <p style={{ color: 'var(--text-color)', fontSize: '1.4rem' }}>
                    {message.email} | {message.phone}
                  </p>
                  <p style={{ color: 'var(--main-color)', fontSize: '1.6rem', marginTop: '1rem' }}>
                    {message.subject}
                  </p>
                  <p style={{ color: 'var(--text-color)', fontSize: '1.4rem', marginTop: '0.5rem' }}>
                    {message.message}
                  </p>
                  <small style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1.2rem' }}>
                    {new Date(message.timestamp).toLocaleString()}
                  </small>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button 
                    onClick={() => toggleMessageRead(message.id)}
                    style={{
                      background: 'var(--main-color)',
                      color: 'var(--bg-color)',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.3rem',
                      cursor: 'pointer',
                      border: 'none',
                      fontSize: '1.4rem'
                    }}
                  >
                    {message.read ? 'Mark Unread' : 'Mark Read'}
                  </button>
                  <button 
                    onClick={() => deleteMessage(message.id)}
                    style={{
                      background: '#f44336',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.3rem',
                      cursor: 'pointer',
                      border: 'none',
                      fontSize: '1.4rem'
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          {messages.length === 0 && (
            <p style={{ 
              textAlign: 'center', 
              color: 'var(--text-color)', 
              padding: '2rem',
              fontSize: '1.6rem'
            }}>
              No messages found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
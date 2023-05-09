function initTimeline() {
    const timeline = document.getElementById('timeline');
    const events = Array.from(document.getElementsByClassName('event'));
  
    events.sort((a, b) => {
      const aDate = new Date(a.getAttribute('data-date'));
      const bDate = new Date(b.getAttribute('data-date'));
      return aDate - bDate;
    });
  
    events.forEach(event => {
      timeline.appendChild(event);
    });
  }
  
  // 在DOMContentLoaded事件中调用initTimeline函数
  document.addEventListener('DOMContentLoaded', initTimeline);
  
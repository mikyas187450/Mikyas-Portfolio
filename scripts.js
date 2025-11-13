var ctxLine = document.getElementById('lineChart').getContext('2d');
new Chart(ctxLine, { type: 'line', data: { labels: ['Jan','Feb','Mar','Apr','May','Jun'], datasets:[{label:'Patients', data:[120,150,180,140,200,220], borderColor:'#4F46E5', fill:false}] }, options:{} });

var ctxBar = document.getElementById('barChart').getContext('2d');
new Chart(ctxBar, { type:'bar', data:{ labels:['Addis','Oromia','Amhara','SNNPR'], datasets:[{label:'Cases', data:[120,80,70,60], backgroundColor:'#06B6D4'}] }, options:{} });

var ctxPie = document.getElementById('pieChart').getContext('2d');
new Chart(ctxPie, { type:'pie', data:{ labels:['Spine','Tena','Other'], datasets:[{data:[240,130,90], backgroundColor:['#4F46E5','#06B6D4','#F59E0B']}] }, options:{} });

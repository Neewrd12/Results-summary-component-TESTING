function input() 
{
  const react_input = document.querySelector('.react_input').value;
    
  const memory_input = document.querySelector('.memory_input').value;

  const verbal_input = document.querySelector('.verbal_input').value;

  const visual_input = document.querySelector('.visual_input').value;

  if (react_input === '' || memory_input === '' || verbal_input === '' || visual_input === '')
  {
    alert('Score has to be between 0 - 100, All the score has to be filled')

    react_input.value = '';
    memory_input.value = '';
    verbal_input.value = '';
    visual_input.value = '';
  
    return
  }

  const nilai = document.querySelector('.nilai-asli')
    .innerHTML = `${((Number(react_input) + Number(memory_input) + Number(verbal_input) + Number(visual_input))/4).toFixed(1)}`;

  console.log((Number(react_input) + Number(memory_input) + Number(verbal_input) + Number(visual_input))/4);

  const rate = document.querySelector('.rating');

  if (nilai >= 0 && nilai <= 60)
  {
    rate.innerHTML = 'Very Bad';

    document.querySelector('.descriptipm').innerHTML = `You probably scored higher than 25% of the people who have taken these tests.`;
  } 
  else if (nilai > 60 && nilai <= 69)
  {
    rate.innerHTML = 'Bad';

    document.querySelector('.descriptipm').innerHTML = `You probably scored higher than 45% of the people who have taken these tests.`;
  }
  else if (nilai > 70 && nilai <= 79)
  {
    rate.innerHTML = 'Great';

    document.querySelector('.descriptipm').innerHTML = `You probably scored higher than 65% of the people who have taken these tests.`;
  }
  else if (nilai > 79 && nilai <= 89)
  {
    rate.innerHTML = 'Really Great';

    document.querySelector('.descriptipm').innerHTML = `You probably scored higher than 75% of the people who have taken these tests.`;
  }
  else if (nilai > 89 && nilai <= 100)
  {
    rate.innerHTML = 'Marvelous';

    document.querySelector('.descriptipm').innerHTML = `You probably scored higher than 85% of the people who have taken these tests.`;
  }
}

function below100()
{
  const react_input = document.querySelector('.react_input');
  
  const memory_input = document.querySelector('.memory_input');

  const verbal_input = document.querySelector('.verbal_input');

  const visual_input = document.querySelector('.visual_input');

  if (Number(react_input.value) > 100)
  {
    alert('Max number is 100');
    react_input.value = 0;
  }

  if (Number(memory_input.value) > 100)
  {
    alert('Max number is 100');
    memory_input.value = 0;
  }

  if (Number(verbal_input.value) > 100)
  {
    alert('Max number is 100');
    verbal_input.value = 0;
  }

  if (Number(visual_input.value) > 100)
  {
    alert('Max number is 100');
    visual_input.value = 0;
  }
}

function reset() 
{
  const rate = document.querySelector('.rating');
  rate.innerHTML = 'Find out';

  document.querySelector('.descriptipm').innerHTML = `The system will show your score after you hit the "count" button, thank you for being here.`;

  const react_input = document.querySelector('.react_input');
  
  const memory_input = document.querySelector('.memory_input');

  const verbal_input = document.querySelector('.verbal_input');

  const visual_input = document.querySelector('.visual_input');

  react_input.value = '';
  memory_input.value = '';
  verbal_input.value = '';
  visual_input.value = '';

  document.querySelector('.nilai-asli')
    .innerHTML = '00';
}
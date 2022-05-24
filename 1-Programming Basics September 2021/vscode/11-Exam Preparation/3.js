function football(input) {
  let team = input[0];
  let type = input[1];
  let quantity = Number(input[2]);
  let price = 0;
  let isInvalid = false;
  switch (team) {
    case 'Argentina':
      {
        switch (type) {
          case 'flags':
            {
              price = 3.25 * quantity;
            }
            break;
          case 'caps':
            {
              price = 7.2 * quantity;
            }
            break;
          case 'posters':
            {
              price = 5.1 * quantity;
            }
            break;
          case 'stickers':
            {
              price = 1.25 * quantity;
            }

            break;
          default: {
            isInvalid = true;
            console.log('Invalid stock!');
          }
        }
      }
      break;
    case 'Brazil':
      {
        switch (type) {
          case 'flags':
            {
              price = 4.2 * quantity;
            }
            break;
          case 'caps':
            {
              price = 8.5 * quantity;
            }
            break;
          case 'posters':
            {
              price = 5.35 * quantity;
            }
            break;
          case 'stickers':
            {
              price = 1.2 * quantity;
            }
            break;
          default: {
            isInvalid = true;
            console.log('Invalid stock!');
          }
        }
      }
      break;
    case 'Croatia':
      {
        switch (type) {
          case 'flags':
            {
              price = 2.75 * quantity;
            }
            break;
          case 'caps':
            {
              price = 6.9 * quantity;
            }
            break;
          case 'posters':
            {
              price = 4.95 * quantity;
            }
            break;
          case 'stickers':
            {
              price = 1.1 * quantity;
            }
            break;
          default: {
            isInvalid = true;
            console.log('Invalid stock!');
          }
        }
      }
      break;
    case 'Denmark':
      {
        switch (type) {
          case 'flags':
            {
              price = 3.1 * quantity;
            }
            break;
          case 'caps':
            {
              price = 6.5 * quantity;
            }
            break;
          case 'posters':
            {
              price = 4.8 * quantity;
            }
            break;
          case 'stickers':
            {
              price = 0.9 * quantity;
            }
            break;
          default: {
            isInvalid = true;
            console.log('Invalid stock!');
          }
        }
      }
      break;
    default: {
      isInvalid = true;
      console.log('Invalid country!');
    }
  }
  if (!isInvalid) {
    console.log(
      `Pepi bought ${quantity} ${type} of ${team} for ${price.toFixed(2)} lv.`
    );
  }
}

football(['Croatia', 'flags', '13']);

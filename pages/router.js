import Router from 'next/router';

function ReadMore() {
  return (
    <div>
      Click <strong onClick={() => Router.push('/shows')}>here</strong> to read more
      <th></th>
      <button onClick={() => Router.push('/shows')}>Click</button>
    </div>
  );
}

export default ReadMore;
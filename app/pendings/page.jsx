export default function PendingsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Pendings</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
          <li>
            <input type="checkbox" />
            <label>Review Axios Interceptor</label>
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Review zustand</label>
          </li>
          <li>
            <input type="checkbox" name="" id=" " />
            <label htmlFor="">review supabase</label>
          </li>
          <li>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">explore solid</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Check haskell backends</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

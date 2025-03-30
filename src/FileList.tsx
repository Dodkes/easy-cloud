import React from "react";

export function FileList({ files }: { files: FileList | null }) {
  return (
    <table className="file-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {files &&
          Array.from(files).map((file) => (
            <tr key={file.name}>
              <td>{file.name}</td>
              <td>{(file.size / 1024).toFixed(2)} KB</td>
              <td>{file.type}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
